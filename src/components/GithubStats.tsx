import { useState, useEffect } from 'react';
import {GitHubCalendar} from 'react-github-calendar';
import { FaGithub, FaBookBookmark, FaUserAstronaut } from 'react-icons/fa6';
import { SiJavascript, SiTypescript, SiPhp } from 'react-icons/si';

export default function GithubStats() {
  const githubUsername = "maulzz"; 

  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
  });

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}`)
      .then((response) => response.json())
      .then((data) => {
        setStats({
          repos: data.public_repos || 0,
          followers: data.followers || 0,
        });
      })
      .catch((error) => console.error("Error fetching GitHub data:", error));
  }, [githubUsername]);

  return (
    <section id="github" className="py-20 bg-neo-bg px-6 border-t-4 border-black">
      <div className="max-w-6xl mx-auto">
    
        <div className="flex items-center gap-4 mb-12">
          <FaGithub className="text-5xl md:text-7xl" />
          <h2 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tighter">
            GitHub <span className="text-neo-blue">Stats.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          

          <div className="bg-neo-yellow border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold font-mono">Public Repos</h3>
              <FaBookBookmark className="text-3xl" />
            </div>
            <p className="text-6xl lg:text-8xl font-black font-heading tracking-tighter">
              {stats.repos}
            </p>
          </div>

          <div className="bg-neo-pink border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold font-mono">Followers</h3>
              <FaUserAstronaut className="text-3xl" />
            </div>
            <p className="text-6xl lg:text-8xl font-black font-heading tracking-tighter">
              {stats.followers}
            </p>
          </div>

          <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-center">
            <h3 className="text-xl font-bold font-mono mb-6">Most Written In</h3>
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-blue-100 border-2 border-black flex items-center justify-center text-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-6">
                <SiTypescript className="text-[#3178C6]" />
              </div>
              <div className="w-16 h-16 bg-yellow-100 border-2 border-black flex items-center justify-center text-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-6">
                <SiJavascript className="text-[#F7DF1E]" />
              </div>
              <div className="w-16 h-16 bg-purple-100 border-2 border-black flex items-center justify-center text-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3">
                <SiPhp className="text-[#777BB4]" />
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-neo-lime border-4 border-black p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-x-auto">
            <h3 className="text-2xl md:text-3xl font-black font-heading mb-6 uppercase tracking-tighter border-b-4 border-black inline-block pb-1">
              Contribution Timeline
            </h3>
       
            <div className="min-w-[800px] font-mono font-bold bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <GitHubCalendar 
                username={githubUsername} 
                blockSize={16}
                blockMargin={4}
                colorScheme="light"
                theme={{
                  light: ['#ebedf0', '#93c5fd', '#3b82f6', '#1d4ed8', '#1e3a8a'],
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}