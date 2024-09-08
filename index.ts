function toggleEdit(section: HTMLElement): void {
    const editableContent = section.querySelector('.editable') as HTMLElement;
    if (editableContent.style.display === 'none') {
      editableContent.style.display = 'block';
    } else {
      editableContent.style.display = 'none';
    }
  }