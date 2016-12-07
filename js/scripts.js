$('#myModal').on('shown.bs.modal', function(event) {
  // reset the scroll to top
  $('#myModal .modal-body').scrollTop(0);
  // get the section using data
  var section = $(event.relatedTarget).data('section');
  // get the top of the section
  var sectionOffset = $('#' + section).offset();
  //scroll the container
  $('#myModal .modal-body').animate({
    scrollTop: sectionOffset.top - 30
  }, "slow");
});