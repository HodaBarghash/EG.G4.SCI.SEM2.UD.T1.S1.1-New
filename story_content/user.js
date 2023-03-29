function ExecuteScript(strId)
{
  switch (strId)
  {
      case "63IxVlr8X3i":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycby3Htlb4xcex7J3tG4TKAW9ZhN1mIVkyFMXwtMIp32_AzvNAXMw6rNbMNVgOlP2VRu7/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

