
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const userMap = {
  "teferita2023@gmail.com": "manager.html",
  "mekuanentworkeye@beza-posterity.org": "bpdo.html",
  "tayek@cheshirefai.org": "cfai.html",
  "lensek2018@gmail.com": "awsad.html",
  "felleke@kidamemart.com": "kmart.html",
  "leul-d@ecdd-ethiopia.org": "ecdd.html",
  "e.mersha@hotmail.com": "manager.html"
};

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const email = userCredential.user.email;
      const page = userMap[email];
      if (page) {
        window.location.href = page;
      } else {
        alert("You are not authorized to access any page.");
        auth.signOut();
      }
    })
    .catch(error => alert(error.message));
}
