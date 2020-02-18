let user;

firebase.auth().onAuthStateChanged(function(newUser) {
  user = newUser;
  if (user) {
    const db = firebase.firestore();
    db.collection("Students").doc(user.email).onSnapshot(function(doc) {
      const cust = doc.data();
      if (cust) {
        document.getElementById('name').setAttribute('value', cust.name);
        document.getElementById('roll').setAttribute('value', cust.phone);
      }
      document.getElementById('email').innerText = user.email;
    });
  }
});

document.getElementById('saveProfile').addEventListener('click', function(ev) {
  const db = firebase.firestore();
  var docRef = db.collection('Students').doc(user.email);
  docRef.set({
    name: document.getElementById('name').value,
    email: user.email,
    phone: document.getElementById('roll').value,
  })
})

