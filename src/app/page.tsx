
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">

      <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Rares Palatka
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
            Full Stack Developer
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>




      <section id="skills" className="w-full py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-200">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['JavaScript', 'TypeScript', 'React', 'Tailwind', 'Next.js', 'Node.js', 'Firebase', 'Git'].map((skill) => (
              <div key={skill} className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-center">
                <p className="font-medium text-gray-800 dark:text-gray-200">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="projects" className="w-full py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-200">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <a className="hover:cursor-pointer" href="/game-summary" target="_blank" rel="noopener noreferrer">
                <div className="bg-linear-to-r from-fuchsia-400 to-purple-800 h-48"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Game summary using AI</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A website that uses AI to recommend games based on users criteria, offering quick access to the games Steam page, while providing other useful information about the games.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                      Tailwind
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                      Groq AI
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48 mx-auto bg-linear-to-r from-teal-500 to-blue-400 "></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">You & Your Pet</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A mobile application that allows users to create a profile for them and their pet, and share it with others through a QR code that would be displayed on the pets collar.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                    React Native
                  </span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
                    Firebase
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    Expo Go
                  </span>
                  <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                    Tailwind
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-linear-to-r from-teal-500 to-blue-400 h-48"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Cat breed classifier</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A mobile application where users can access a model who was trained over 1000 images of cats and their breeds and it will predict the 2 most likely breeds of the cat that the user uploads, with a confidence score.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">
                    CNNs
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                    React Native
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    Expo Go
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-linear-to-r from-teal-500 to-blue-400 h-48"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Various smaller projects</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A fully functional Blackjack game <br></br> A chrome extension that allows you to save your favorite websites and access them <br></br> A mobile app to quickly convert from imperial to metric units and vice versa <br></br> A password generator with different conditions for the password
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section id="about" className="w-full py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">About Me</h2>
          <div className=" md:grid-cols-2 gap-8 items-center text-center">
            <div className="relative h-64 md:h-full">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm a Full Stack Developer with a passion for efficiency. My love for technology started when I was young, always curious about how things work, trying to improve them and keeping up with the newest cutting edge technologies. From building lego, to assembling computers, to building websites, I've always liked to create something from scratch.
              </p>
            </div>
            <div>

              <p className="text-gray-600 dark:text-gray-400">
                I've been working for the past 2 years on my own projects, following courses like "The Odin Project" and learning new technologies as I go. I hold a Bachelor's degree in Applied Electronics from the Technical University of Cluj-Napoca, where I developed a strong foundation in software engineering principles. Going forward, I've taken an interest in AI, and I'm looking to expand my knowledge and skills in the field of software development.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="w-full py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-200">Get In Touch</h2>
          <div className="flex flex-col items-center">
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-2xl">
              I'm always interested in hearing about new opportunities.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:palatkarares@gmail.com"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/rares-palatka-ba3518216/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
