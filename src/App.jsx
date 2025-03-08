import ProfileCard from './components/ProfileCard'

function App() {
  const userData = {
    name: "Jay Gundaraniya",
    role: "Full-stack Developer",
    bio: "Experienced fullstack developer with a passion for building scalable web applications from the ground up. Proficient in both frontend technologies (React, JavaScript, HTML/CSS) and backend systems (Node.js, Express, MongoDB).",
    image: "https://img.freepik.com/free-photo/man-white_1368-3544.jpg?semt=ais_hybrid",
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"]
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <ProfileCard
        name={userData.name}
        role={userData.role}
        bio={userData.bio}
        image={userData.image}
        skills={userData.skills}
      />
    </div>
  )
}

export default App