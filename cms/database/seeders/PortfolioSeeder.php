<?php

namespace Database\Seeders;

use App\Models\Experience;
use App\Models\Profile;
use App\Models\Project;
use App\Models\Skill;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        $feDataPath = base_path('../fe/src/data');

        $profileFile = "{$feDataPath}/profile.json";
        if (File::exists($profileFile)) {
            $data = json_decode(File::get($profileFile), true);
            Profile::query()->updateOrCreate(
                ['email' => $data['email']],
                [
                    'brand_name' => $data['brandName'] ?? 'Maulzz.Dev',
                    'full_name' => $data['fullName'] ?? 'Wildan Maulana',
                    'role_title' => $data['roleTitle'] ?? '',
                    'availability_text' => $data['availabilityText'] ?? '',
                    'short_bio' => $data['shortBio'] ?? '',
                    'avatar_url' => $data['avatarUrl'] ?? '',
                    'cv_url' => $data['cvUrl'] ?? '',
                    'focus_label' => $data['focusLabel'] ?? '',
                    'locale_badge' => $data['localeBadge'] ?? 'ID / EN',
                    'location' => $data['location'] ?? '',
                    'github_username' => $data['githubUsername'] ?? 'maulzz',
                    'social_links' => $data['socialLinks'] ?? [],
                    'about_pillars' => $data['aboutPillars'] ?? [],
                ]
            );
        }

        $projectsFile = "{$feDataPath}/projects.json";
        if (File::exists($projectsFile)) {
            $projects = json_decode(File::get($projectsFile), true);
            foreach ($projects as $index => $project) {
                Project::query()->updateOrCreate(
                    ['slug' => $project['slug']],
                    [
                        'title' => $project['title'],
                        'category' => $project['category'],
                        'year' => $project['year'] ?? '',
                        'featured' => (bool) ($project['featured'] ?? false),
                        'is_published' => true,
                        'sort_order' => $index + 1,
                        'overview' => $project['overview'] ?? '',
                        'problem' => $project['problem'] ?? '',
                        'solution' => $project['solution'] ?? '',
                        'my_role' => $project['myRole'] ?? [],
                        'tech_stack' => $project['techStack'] ?? [],
                        'key_features' => $project['keyFeatures'] ?? [],
                        'architecture' => $project['architecture'] ?? [],
                        'challenges' => $project['challenges'] ?? [],
                        'screenshots' => $project['screenshots'] ?? [],
                        'links' => $project['links'] ?? [],
                    ]
                );
            }
        }

        $skillsFile = "{$feDataPath}/skills.json";
        if (File::exists($skillsFile)) {
            $skills = json_decode(File::get($skillsFile), true);
            foreach ($skills as $index => $skill) {
                Skill::query()->updateOrCreate(
                    ['code' => $skill['code']],
                    [
                        'category' => $skill['category'],
                        'sort_order' => $index + 1,
                        'items' => $skill['items'] ?? [],
                    ]
                );
            }
        }

        $experiencesFile = "{$feDataPath}/experiences.json";
        if (File::exists($experiencesFile)) {
            $experiences = json_decode(File::get($experiencesFile), true);
            foreach ($experiences as $index => $exp) {
                Experience::query()->updateOrCreate(
                    ['title' => $exp['title'], 'institution' => $exp['institution']],
                    [
                        'category' => $exp['category'],
                        'year' => $exp['year'],
                        'tag' => $exp['tag'],
                        'desc' => $exp['desc'],
                        'learnings' => $exp['learnings'] ?? [],
                        'highlight' => (bool) ($exp['highlight'] ?? false),
                        'sort_order' => $index + 1,
                    ]
                );
            }
        }
    }
}
