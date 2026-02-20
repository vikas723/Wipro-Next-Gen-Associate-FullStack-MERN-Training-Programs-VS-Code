import React from "react";

const EnrolledList = ({ enrolledCourses, allCourses }) => {
  const enrolledDetails = allCourses.filter(course =>
    enrolledCourses.includes(course.courseId)
  );

  if (enrolledCourses.length === 0) {
    return <p>No courses enrolled yet.</p>;
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Enrolled Courses</h3>
      {enrolledDetails.map(course => (
        <div
          key={course._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px"
          }}
        >
          <h4>{course.title}</h4>
          <p>Category: {course.category}</p>
          <p>Price: ${course.price}</p>
        </div>
      ))}
    </div>
  );
};

export default EnrolledList;

