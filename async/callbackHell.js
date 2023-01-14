const hello = (name, myCallback) => {
  setTimeout(() => {
    console.log(`Hola, ${name}`);
    myCallback(name);
  }, 1500);
};
const bye = (name, otherCallback) => {
  setTimeout(() => {
    console.log(`Adiós, ${name}`);
    otherCallback();
  }, 1000);
};
const speak = (speakCallback) => {
  setTimeout(() => {
    console.log(`Bla Bla Bla`);
    speakCallback();
  }, 1000);
};

console.log("Iniciando proceso...");
hello("Noel", (name) => {
  speak(() => {
    bye(name, () => {
      console.log("Terminando proceso...");
    });
  });
});
