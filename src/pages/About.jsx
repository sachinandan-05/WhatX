export default function About() {
    const team = [
      {
        name: "Sachinandan",
        role: "Creator & Builder",
        bio: "Solo developer who turned caffeine and late nights into something actually useful.",
        gradient: "from-purple-500 to-pink-500",
        skills: ["Full Stack", "Design", "Everything Else"]
      }
    ];
  
    const values = [
      {
        title: "User First",
        description: "Every decision we make starts with how it impacts the people using our products.",
        icon: "👥",
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        title: "Simple & Powerful",
        description: "We believe the best solutions are elegant, intuitive, and incredibly effective.",
        icon: "⚡",
        gradient: "from-purple-500 to-pink-500"
      },
      {
        title: "Always Learning",
        description: "We're constantly growing, experimenting, and pushing the boundaries of what's possible.",
        icon: "🚀",
        gradient: "from-green-500 to-emerald-500"
      }
    ];
  
    const stats = [
      { label: "Hours Coding", value: "10K+", gradient: "from-purple-500 to-pink-500" },
      { label: "Coffee Cups", value: "∞", gradient: "from-blue-500 to-cyan-500" },
      { label: "Features Built", value: "42", gradient: "from-green-500 to-emerald-500" },
      { label: "Sleep Hours", value: "4", gradient: "from-orange-500 to-red-500" }
    ];
  
    return (
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Hey! I'm Sachinandan, and I build things on the internet. Sometimes they even work.
            </p>
          </div>
  
          {/* Mission Statement */}
          <div className="bg-gray-50 rounded-3xl p-12 mb-20 border border-gray-100">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">My Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                To build cool stuff that doesn't suck. I'm tired of overcomplicated tools that make simple things hard. 
                So I'm making simple tools that make hard things easy. One line of code at a time.
              </p>
            </div>
          </div>
  
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-block p-6 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white mb-4`}>
                  <div className="text-3xl font-bold">{stat.value}</div>
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
  
          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">How I Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-6">
                    <div className={`inline-block p-6 rounded-2xl bg-gradient-to-br ${value.gradient} text-white text-4xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">The Human Behind This</h2>
            <div className="grid grid-cols-1 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:scale-105 transition-transform duration-300 group max-w-md mx-auto">
                  <div className="text-center">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className={`text-sm font-medium mb-4 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-600 border border-gray-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Story */}
          <div className="bg-gray-50 rounded-3xl p-12 mb-20 border border-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">My Story</h2>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed space-y-6">
              <p>
                Started coding when I was 17 because I wanted to make games. Turns out I was better at breaking things than making them. 
                Fast forward a few years, and I'm still breaking things – but now I call it "testing" and somehow people pay me for it.
              </p>
              <p>
                I've worked at startups, big tech companies, and everything in between. Learned that the best products come from 
                understanding real problems and building simple solutions. Also learned that coffee is a food group.
              </p>
              <p>
                Now I'm building tools that I actually want to use. If you find them useful too, that's just a happy accident. 
                If not, well, at least I had fun making them.
              </p>
            </div>
          </div>
  
          {/* Contact CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Let's build something cool</h2>
            <p className="text-gray-600 mb-8">
              Got an idea? Found a bug? Just want to chat about code? I'm always up for a good conversation.
            </p>
            <a
  href="mailto:sachinandan.priv05@gmail.com"
  className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/25"
>
  Hit Me Up
</a>

          </div>
        </div>
      </div>
    );
  }