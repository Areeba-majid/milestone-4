function toggleEdit(section) {
    const editableContent = section.querySelector('.editable');
    if (editableContent.style.display === 'none') {
      editableContent.style.display = 'block';
    } else {
      editableContent.style.display = 'none';
    }
  }