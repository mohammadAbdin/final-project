import './StudentProfile.css'

const StudentProfile = ({ student }) => {
  const { imageSrc, name, birthDate, mother, father } = student

  return (
    <div className="card-container">
      <div className="card-item">
        <div className="image-section">
          <div className="ellipse-background"></div>
          <div className="image-wrapper">
            <img src={imageSrc} alt="Student" className="profile-picture" />
          </div>
        </div>

        <div className="student-details">
          <h2 className="student-name">{name}</h2>
          <h3>Student Details</h3>
          <div className="details-box">
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Birth Date:</strong> {birthDate}
            </p>
            <p>
              <strong>Father's Name:</strong> {father.name} (Phone:{' '}
              {father.phone})
            </p>
            <p>
              <strong>Mother's Name:</strong> {mother.name} (Phone:{' '}
              {mother.phone})
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile
