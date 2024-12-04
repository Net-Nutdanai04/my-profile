export default function Resume() {
    return (
      <section id="resume" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Resume</h2>
          
          <div className="max-w-3xl mx-auto">
            {/* Preview Card */}
            <div className="bg-background rounded-xl shadow-lg p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">My Resume</h3>
                <a
                  href="/resume.pdf" // Add your resume PDF in the public folder
                  download
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Download PDF
                </a>
              </div>
              
              {/* Resume Sections */}
              <div className="space-y-6">
                {/* Education */}
                <div>
                  <h4 className="text-lg font-medium mb-3">Education</h4>
                  <div className="space-y-4">
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Bachelor of Engineering in Software Engineering</span>
                        <span className="text-sm text-foreground/60">2020 - 2024</span>
                      </div>
                      <span className="text-foreground/60">Your University Name</span>
                    </div>
                  </div>
                </div>
  
                {/* Skills Summary */}
                <div>
                  <h4 className="text-lg font-medium mb-3">Technical Skills</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Frontend</h5>
                      <ul className="list-disc list-inside text-foreground/60">
                        <li>React.js & Next.js</li>
                        <li>TypeScript</li>
                        <li>TailwindCSS</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Backend</h5>
                      <ul className="list-disc list-inside text-foreground/60">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                      </ul>
                    </div>
                  </div>
                </div>
  
                {/* Experience */}
                <div>
                  <h4 className="text-lg font-medium mb-3">Experience</h4>
                  <div className="space-y-4">
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Software Engineering Intern</span>
                        <span className="text-sm text-foreground/60">Summer 2023</span>
                      </div>
                      <span className="text-foreground/60 block mb-2">Company Name</span>
                      <ul className="list-disc list-inside text-foreground/60">
                        <li>Developed features for company's main product</li>
                        <li>Collaborated with senior developers on project architecture</li>
                        <li>Participated in code reviews and team meetings</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }