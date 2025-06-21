import React, { useState, useEffect } from "react";
import CommentBox from "./CommentBox";

const TutorialDetails = ({ tutorial, onBack, user }) => {
  const [tutorialData, setTutorialData] = useState(tutorial || null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!tutorial?._id) return;
    fetchTutorialDetails();
  }, [tutorial?._id]);

  const fetchTutorialDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/tutorials/${tutorial._id}`
      );
      const data = await response.json();
      setTutorialData(data.tutorial || tutorial);
      setComments(data.comments || []);
    } catch (error) {
      console.error("Error fetching tutorial details:", error);
    }
  };

  const handleLike = async () => {
    console.log("Tutorial ID:", tutorialData?._id);
    if (!tutorialData?._id) {
      console.warn("This tutorial has no valid ID and cannot be liked.");
      return;
    }

    const learnerId = user?.uid || user?.email;
    console.log("Sending learnerId as:", learnerId);

    try {
      const response = await fetch(
        `http://localhost:5000/api/tutorials/${tutorialData._id}/like`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ learnerId }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setTutorialData(data);
      } else {
        console.error("Like failed:", data.message);
      }
    } catch (error) {
      console.error("Error liking tutorial:", error);
    }
  };

  const getVideoId = (url) => {
    if (!url) return null;
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  if (!tutorialData) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <p style={{ color: "red" }}>Tutorial not found or loading...</p>
        <button onClick={onBack}>← Back</button>
      </div>
    );
  }

  const videoId = getVideoId(tutorialData.videoUrl || tutorialData.videoURL);

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "2rem auto",
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
      }}
    >
      <button
        onClick={onBack}
        style={{
          background: "none",
          border: "none",
          color: "#4b61d1",
          fontSize: "1rem",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        ← Back to Tutorials
      </button>

      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        {tutorialData.title}
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#555",
          fontSize: "0.9rem",
          marginBottom: "1rem",
        }}
      >
        {tutorialData.category && (
          <span>
            <strong>Category:</strong> {tutorialData.category}
          </span>
        )}
        {tutorialData.createdAt && (
          <span>
            <strong>Published:</strong>{" "}
            {new Date(tutorialData.createdAt).toLocaleDateString()}
          </span>
        )}
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 3, minWidth: "300px" }}>
          {videoId ? (
            <div>
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={tutorialData.title}
                frameBorder="0"
                allowFullScreen
                style={{ borderRadius: "8px" }}
              />
            </div>
          ) : (
            <p style={{ color: "red" }}>
              No video available for this tutorial.
            </p>
          )}
        </div>

        <div style={{ flex: 1, minWidth: "150px" }}>
          <p>
            <strong>Instructor:</strong> {tutorialData.author || "Unknown"}
          </p>
        </div>
      </div>

      <div
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.6",
          color: "#333",
          marginBottom: "1.5rem",
        }}
      >
        <p>{tutorialData.description}</p>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <button
          onClick={handleLike}
          className="like-btn"
          style={{
            backgroundColor: "#f14668",
            color: "white",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ❤️ Like ({tutorialData.likes || 0})
        </button>
      </div>

      <CommentBox
        tutorialId={tutorial._id}
        comments={comments}
        onCommentAdded={fetchTutorialDetails}
        user={user} // ✅ Pass user to show comment form only if logged in
      />
    </div>
  );
};

export default TutorialDetails;
