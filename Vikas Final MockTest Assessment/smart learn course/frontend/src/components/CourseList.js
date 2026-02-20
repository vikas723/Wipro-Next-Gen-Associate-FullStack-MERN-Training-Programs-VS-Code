import React, { useEffect, useState } from "react";
import { fetchCourses, enrollCourse } from "../services/api";
import { toast } from "react-toastify";
import EnrolledList from "./EnrolledList";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = "U1";

  useEffect(() => {
    fetchCourses()
      .then(res => {
        setCourses(res.data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleEnroll = async (courseId) => {
    try {
      await enrollCourse({ userId, courseId });
      toast.success("Enrollment successful");
      setEnrolledCourses([...enrolledCourses, courseId]);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error");
    }
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Course Catalog</h2>

      {/* Bootstrap Row */}
      <div className="row">
        {courses.map(course => (
          <div className="col-md-4 mb-4" key={course._id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text text-muted">
                  {course.category}
                </p>
                <p className="fw-bold">${course.price}</p>

                <button
                  className="btn btn-primary w-100"
                  disabled={enrolledCourses.includes(course.courseId)}
                  onClick={() => handleEnroll(course.courseId)}
                >
                  {enrolledCourses.includes(course.courseId)
                    ? "Enrolled"
                    : "Enroll Now"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enrolled Section */}
      <div className="mt-5">
        <EnrolledList
          enrolledCourses={enrolledCourses}
          allCourses={courses}
        />
      </div>
    </div>
  );
};

export default CourseList;