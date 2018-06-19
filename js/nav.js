var html = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link" href="index.html" class="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
          Home
        </a>
      </li>
    </ul>    

    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link" href="../locations/card-locations.html" class="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
          Cardiology
        </a>
      </li>
    </ul>

    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link" href="../locations/surgery-locations.html" class="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
          General Surgery
        </a>
      </li>
    </ul>      

    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link" href="../locations/neurology-locations.html" class="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
          Neurology
        </a>
      </li>
    </ul>

    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link" href="../locations/ortho-locations.html" class="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
          Orthopedics
        </a>
      </li>
    </ul>
  
    </div>
  </nav>`;

  document.getElementById('navigation').innerHTML = html;