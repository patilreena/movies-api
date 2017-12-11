import React from 'react';
export default function MovieForm({ onSubmit }) {
  function handleFormSubmission(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target.elements);
    const { elements } = event.target;
    const title = elements['title'].value;
    const yearReleased = elements['yearReleased'].value;
    onSubmit({ title, yearReleased });
  }
  return (
    <form onSubmit={handleFormSubmission}>
      <label>
        Title
        <input type="text" name="title" />
      </label>
      <label>
        Year
        <input type="number" name="yearReleased" />
      </label>
      <button type="submit">Create Movie&hearts;</button>
    </form>
  );
}
