const questions = [
  {
    level: "1",
    image:
      "https://www.ebookanak.com/wp-content/uploads/Gambar-47-Membersihkan-dan-Merapikan-Tempat-Tidur.jpg",
    question: "Apa yang dilakukan setelah bangun tidur?",
    choice1: "Pergi",
    choice2: "Merapikan Tempat Tidur",
    answer: "Merapikan Tempat Tidur",
    judul: "TIPS MERAPIKAN TEMPAT TIDUR",
    content:
      "Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat. Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.Merapikan tempat tidur setiap pagi adalah hal sederhana namun merupakan kebiasaan yang bermanfaat.",
  },
  {
    level: "2",
    image:
      "https://janethes.com/wp-content/uploads/2019/01/mengajarkan-rutinitas-gosok-gigi-pada-anak_Artboard-2.png",
    question: "Apa yang dilakukan untuk menjaga gigi tetap sehat?",
    choice1: "menyikat gigi",
    choice2: "menyikat kaki",
    answer: "menyikat gigi",
    judul: "TIPS MENGGOSOK GIGI",
    content:
      "Menyikat gigi merupakan rutinitas yang dilakukan untuk memelihara kebersihan dan kesehatan gigi dan mulut",
  },
  {
    level: "3",
    image:
      "https://www.ebookanak.com/wp-content/uploads/Gambar-48-Keramas-dengan-Sampo-Saat-Mandi.jpg",
    question: "Apa yang dilakukan untuk membersihkan badan?",
    choice1: "Mandi",
    choice2: "Makan",
    answer: "Mandi",
    judul: "TIPS MANDI YANG BAIK",
    content:
      "Mandi adalah kegiatan perawatan kulit harian yang memberikan banyak manfaat. Namun, agar mandi benar dan efektif, ada beberapa tips yang perlu diperhatikan yang dijelaskan berikut in",
  },
];

let currentQuestion = 0;
let skor = 1;

const levelElement = document.getElementById("level");
const levelmodalElement = document.getElementById("levelModal");
const imageElement = document.getElementById("image");
const questionElement = document.getElementById("question");
const choice1Element = document.getElementById("choice1");
const choice2Element = document.getElementById("choice2");
const resultElement = document.getElementById("result");
const judulElement = document.getElementById("judul");
const contentElement = document.getElementById("content");
const skorElement = document.getElementById("skor");

function displayQuestion() {
  levelElement.textContent = questions[currentQuestion].level;
  levelmodalElement.textContent = questions[currentQuestion].level;
  imageElement.src = questions[currentQuestion].image;
  questionElement.textContent = questions[currentQuestion].question;
  choice1Element.textContent = questions[currentQuestion].choice1;
  choice2Element.textContent = questions[currentQuestion].choice2;
  judulElement.textContent = questions[currentQuestion].judul;
  contentElement.textContent = questions[currentQuestion].content;
  skorElement.textContent = skor + "/" + questions.length;
}

displayQuestion();

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].answer) {
    document.getElementById("benar-modal").style.display = "flex";
    currentQuestion++;
    skor++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      document.getElementById("end-modal").style.display = "flex";
    }
  } else {
    document.getElementById("salah-modal").style.display = "flex";
    skor--;
  }
}

choice1Element.addEventListener("click", () => {
  checkAnswer(questions[currentQuestion].choice1);
  choice1Element.disabled = true;
});

choice2Element.addEventListener("click", () => {
  checkAnswer(questions[currentQuestion].choice2);
  choice2Element.disabled = true;
});

function backModal() {
  document.getElementById("salah-modal").style.display = "none";
}

function bacaMateri() {
  document.getElementById("materi-modal").style.display = "flex";
  document.getElementById("salah-modal").style.display = "none";
}

function bacaMatericlose() {
  document.getElementById("materi-modal").style.display = "none";
  document.getElementById("salah-modal").style.display = "flex";
}

function nextModal() {
  resetButtons();
  document.getElementById("benar-modal").style.display = "none";
}

function resetButtons() {
  choice1Element.disabled = false;
  choice2Element.disabled = false;
}

function endModal() {
  document.getElementById("end-modal").style.display = "none";
  window.location.reload();
}
