import { useState } from "react";

const GenerateDescription = () => {
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [audience, setAudience] = useState("");
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    if (!eventName || !eventType || !audience) return;

    const text = `The ${eventName} is a well-planned ${eventType} designed for approximately ${audience} attendees. 
This event focuses on engagement, smooth coordination, and a memorable experience with professional services and smart planning.`;

    setOutput(text);
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl">
      <h2 className="text-2xl font-bold mb-4">
        Generate Event Description (AI)
      </h2>

      <input
        type="text"
        placeholder="Event Name"
        className="border p-2 w-full mb-3 rounded"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />

      <select
        className="border p-2 w-full mb-3 rounded"
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
      >
        <option value="">Select Event Type</option>
        <option>College Fest</option>
        <option>Tech Conference</option>
        <option>Wedding</option>
        <option>Corporate Meeting</option>
        <option>Workshop / Seminar</option>
      </select>

      <input
        type="number"
        placeholder="Audience Size"
        className="border p-2 w-full mb-4 rounded"
        value={audience}
        onChange={(e) => setAudience(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        className="bg-indigo-600 text-white px-4 py-2 rounded w-full"
      >
        Generate Using AI
      </button>

      {output && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="font-semibold mb-1">AI Output:</p>
          <p className="text-gray-700">{output}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateDescription;
