export default function About() {
    return (
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Background</h3>
                <p className="text-foreground/80 leading-relaxed">
                  I am a passionate software engineering student with a strong interest in building modern web applications. 
                  My journey in programming started with web development, and I've since expanded my skills to include various technologies and frameworks.
                </p>
              </div>
  
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-medium">Bachelor of Engineering in Software Engineering</h4>
                  <p className="text-foreground/60">Your University Name</p>
                  <p className="text-foreground/60">Expected Graduation: May 2024</p>
                </div>
              </div>
  
              <div>
                <h3 className="text-xl font-semibold mb-2">Interests</h3>
                <ul className="list-disc list-inside text-foreground/80 space-y-2">
                  <li>Full-Stack Web Development</li>
                  <li>Cloud Computing and DevOps</li>
                  <li>Machine Learning and AI</li>
                  <li>Open Source Contribution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }