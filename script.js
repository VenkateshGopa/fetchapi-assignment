async function getdata(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
async function get() {
  code = document.getElementById("code").value;
  number = document.getElementById("number").value;
  fullnumber = `${code}${number}`;
  url = `https://phonevalidation.abstractapi.com/v1/?api_key=7ffbd181dc804c45b06d4b81db6b5e20&phone=${fullnumber}`;
  const data = await getdata(url);
  console.log(data.valid);
  if (data.valid == true) {
    document.getElementById("color").style.backgroundColor = "green";
    document.getElementById("status").innerHTML = ` <i class="fa fa-check " aria-hidden="true"></i> Number is valid`;
  } else {
    document.getElementById("color").style.backgroundColor = "red";
    document.getElementById("status").innerHTML = `<i class="fa fa-times " aria-hidden="true"></i> Number is invalid`;
  }
  document.getElementById("Country Code").innerHTML = data.country.code;
  document.getElementById("Country Name").innerHTML = data.country.name;
  document.getElementById("Prefix").innerHTML = data.country.prefix;
  document.getElementById("Number").innerHTML = data.phone;
  document.getElementById("Carrier").innerHTML = data.carrier;
  document.getElementById("Valid").innerHTML = data.valid;
  document.getElementById("table").style.display = "table";
  console.log(data);
}
