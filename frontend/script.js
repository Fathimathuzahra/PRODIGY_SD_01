async function convertTemp() {

  const temp = document.getElementById("temp").value;
  const unit = document.getElementById("unit").value;

  const response = await fetch("http://localhost:5000/convert", {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      temp: Number(temp),
      unit
    })
  });

  const data = await response.json();

document.getElementById("result").innerHTML = `

  ${data.celsius ? `<p>🌡 Celsius: ${data.celsius.toFixed(2)}</p>` : ""}

  ${data.fahrenheit ? `<p>🔥 Fahrenheit: ${data.fahrenheit.toFixed(2)}</p>` : ""}

  ${data.kelvin ? `<p>❄ Kelvin: ${data.kelvin.toFixed(2)}</p>` : ""}

`;
}