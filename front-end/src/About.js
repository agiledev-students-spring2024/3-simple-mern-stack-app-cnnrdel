import React, { useEffect, useState} from 'react'

const About = () => {
  const[aboutUsData, setAboutUsData] = useState ({
    title: '',
    content: [],
    imageURL: ''
  })
  
  useEffect(() => {
    fetch('http://localhost:5002/about_us')
    .then(res => res.json())
    .then(data => {
      setAboutUsData(data)
    })
    .catch(error => console.error('Error fetching About Us data:', error))
  }, [])
  
  return (
    <>
    <div>
      <h1>About Us</h1>

      <img
        src= {aboutUsData.image}
        alt="About Us"
        style={{ maxWidth: '500px', height: 'auto' }}
        // style={{maxWidth: '100%'}}
        
      />
      <p>
      Connor DeLeon, hailing from Baltimore, is a computer science major at New York University, showcasing a profound dedication to both technical and creative disciplines. His academic journey is enriched by minors in American Sign Language, Web Applications and Development, and Studio Art, illustrating a diverse range of interests that bridge the gap between technology and art. Connor's multifaceted education not only equips him with a solid foundation in computing but also instills a deep appreciation for the nuances of communication and design, setting the stage for a career that blends innovation with creativity.
      </p>
      <p>
      Currently, Connor is expanding his expertise by participating in a course focused on agile app development. This course is an essential part of his education, as it delves into the principles of agile methodologies, emphasizing flexibility, customer satisfaction, and iterative progress. Through this, he is gaining hands-on experience in developing applications that respond to changing requirements and user needs, a skill set highly valued in today's dynamic tech landscape. This experience is particularly significant for Connor, as it aligns with his aspiration for a creative career, offering him practical insights into managing and contributing to projects that require both technical prowess and creative thinking.

      </p>
      <p>
      Connor's unique combination of interests and skills positions him as an emerging talent in the tech industry, with a clear vision for integrating the realms of computer science and creativity. His pursuit of a creative career is underpinned by a robust educational background and a keen interest in innovative app development practices. As he continues to navigate his coursework and hands-on projects at New York University, Connor is laying the groundwork for a future where technology and art converge, promising a career that is as impactful as it is imaginative.
      </p>
    </div>

      {/* // <h1>About Us</h1> */}
      {/* // <img src="<img src=http://localhost:3000/static/portrait.jpg alt=connor></img>" alt="connor"></img> */}
      

    </>



  )
}

// make this component available to be imported into any other file
export default About