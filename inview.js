function isInViewport(dom){
  var c=dom.getBoundingClientRect();
  var d=window.innerHeight||document.documentElement.clientHeight;
  var b=window.innerWidth||document.documentElement.clientWidth;
  return c.bottom>0&&c.top<d&&c.right>0&&c.left<b
};
