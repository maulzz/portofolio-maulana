<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Experience;
use App\Models\Profile;
use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class PortfolioController extends Controller
{
    public function profile(): JsonResponse
    {
        $profile = Profile::query()->first();

        if (! $profile) {
            return response()->json(['message' => 'Profile not configured'], 404);
        }

        return response()->json([
            'brandName' => $profile->brand_name,
            'fullName' => $profile->full_name,
            'roleTitle' => $profile->role_title,
            'availabilityText' => $profile->availability_text,
            'shortBio' => $profile->short_bio,
            'avatarUrl' => $this->resolveMediaUrl($profile->avatar_url),
            'cvUrl' => $this->resolveMediaUrl($profile->cv_url),
            'focusLabel' => $profile->focus_label,
            'localeBadge' => $profile->locale_badge,
            'email' => $profile->email,
            'location' => $profile->location,
            'githubUsername' => $profile->github_username,
            'socialLinks' => $profile->social_links ?? [],
            'aboutPillars' => $profile->about_pillars ?? [],
        ]);
    }

    public function projects(): JsonResponse
    {
        $projects = Project::query()
            ->where('is_published', true)
            ->orderByDesc('featured')
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(fn (Project $project) => $this->transformProject($project));

        return response()->json($projects);
    }

    public function project(string $slug): JsonResponse
    {
        $project = Project::query()
            ->where('slug', $slug)
            ->where('is_published', true)
            ->first();

        if (! $project) {
            return response()->json(['message' => 'Project not found'], 404);
        }

        return response()->json($this->transformProject($project));
    }

    public function skills(): JsonResponse
    {
        $skills = Skill::query()
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(function (Skill $skill) {
                $items = collect($skill->items ?? [])->map(fn (array $item) => [
                    'name' => $item['name'] ?? '',
                    'iconKey' => $item['iconKey'] ?? ($item['icon_key'] ?? ''),
                    'iconUrl' => $this->resolveMediaUrl($item['iconUrl'] ?? ($item['icon_url'] ?? '')),
                ])->values()->all();

                return [
                    'code' => $skill->code,
                    'category' => $skill->category,
                    'items' => $items,
                ];
            });

        return response()->json($skills);
    }

    public function experiences(): JsonResponse
    {
        $experiences = Experience::query()
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(fn (Experience $exp) => [
                'id' => $exp->id,
                'category' => $exp->category,
                'year' => $exp->year,
                'tag' => $exp->tag,
                'title' => $exp->title,
                'institution' => $exp->institution,
                'desc' => $exp->desc,
                'learnings' => $exp->learnings ?? [],
                'highlight' => (bool) $exp->highlight,
            ]);

        return response()->json($experiences);
    }

    private function transformProject(Project $project): array
    {
        $screenshots = collect($project->screenshots ?? [])->map(fn (array $shot) => [
            'src' => $this->resolveMediaUrl($shot['src'] ?? ''),
            'caption' => $shot['caption'] ?? '',
        ])->values()->all();

        $myRole = $project->my_role ?? [];
        $architecture = $project->architecture ?? [];
        $links = $project->links ?? [];

        return [
            'id' => $project->id,
            'slug' => $project->slug,
            'title' => $project->title,
            'category' => $project->category,
            'year' => $project->year ?? '',
            'featured' => (bool) $project->featured,
            'overview' => $project->overview ?? '',
            'problem' => $project->problem ?? '',
            'solution' => $project->solution ?? '',
            'myRole' => [
                'title' => $myRole['title'] ?? '',
                'contribution' => $myRole['contribution'] ?? '',
                'responsibilities' => $myRole['responsibilities'] ?? [],
            ],
            'techStack' => $project->tech_stack ?? [],
            'keyFeatures' => $project->key_features ?? [],
            'architecture' => [
                'summary' => $architecture['summary'] ?? '',
                'flow' => $architecture['flow'] ?? [],
            ],
            'challenges' => $project->challenges ?? [],
            'screenshots' => $screenshots,
            'links' => [
                'live' => $links['live'] ?? '',
                'github' => $links['github'] ?? '',
            ],
        ];
    }

    private function resolveMediaUrl(?string $path): string
    {
        if (! $path) {
            return '';
        }

        if (str_starts_with($path, 'http://') || str_starts_with($path, 'https://') || str_starts_with($path, '/')) {
            return $path;
        }

        if (Storage::disk('public')->exists($path)) {
            return url(Storage::url($path));
        }

        return $path;
    }
}
