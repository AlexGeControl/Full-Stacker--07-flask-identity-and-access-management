window.parseISOString = function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
};

function deletePost(element) {
  // parse id:
  const id = element.getAttribute("data-id");

  // DELETE:
  fetch(
    `/posts/${id}`, 
    {
        method: 'DELETE',
        redirect: 'follow'
    }
  ) 
}
