<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>TalentClick Calculator</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
        <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> -->
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="assets/css/nouislider.min.css">
        <link rel="stylesheet" href="assets/css/styles.css">

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>

      <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand talentclick-title" href="#">TalentClick</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="http://www.talentclick.com/">Home</a></li>
            <li><a href="http://www.talentclick.com/solutions/">Solutions</a></li>
            <li><a href="http://www.talentclick.com/#industry-featurettes">Indunstries</a></li>
            <li><a href="http://www.talentclick.com/partners/">Partners</a></li>
            <li><a href="http://www.talentclick.com/blog/">Resources</a></li>
            <!-- <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li class="dropdown-header">Nav header</li>
                <li><a href="#">Separated link</a></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li> -->
          </ul>
         <!--  <ul class="nav navbar-nav navbar-right">
           <li><a href="../navbar/">Default</a></li>
           <li class="active"><a href="./">Static top <span class="sr-only">(current)</span></a></li>
           <li><a href="../navbar-fixed-top/">Fixed top</a></li>
         </ul> -->
        </div><!--/.nav-collapse -->
      </div>
    </nav>


    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <h1 class="green_heading">Price Calculator</h1>
                <h3>Subscription Pricing for Small &amp; Med Sized Companies</h3>
            </div>
        </div><!-- ./row -->
    </div><!-- ./ container -->

    <div class="container mT50">
        <div class="row">

            <div class="col-md-8 col-md-offset-2 greenBg calc_wrapper">
              <div class="row">
                <div class="col-md-12 mT5 text-center">
                  Use the slider or manually insert the number of employees
                  <hr class="divider">
                </div>
              </div>

              <div class="row liteGreenBg mLR0 pL5">
                <div class="col-md-10 mT50 text-center">
                  <div id="employees"></div>
                </div>


                <div class="col-md-2 mT15 text-center">
                    <form class="" method="post">
                    <div class="form-group">
                        <label for="employees_num">Number of Employees</label>
                        <input class="form-control input-lg" id="employees_num" type="number" value="10">
                    </div>
                    </form>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 mT5 text-center font16">
                  Fees for <span class="emp_num"></span> employees
                </div>
              </div>

              <div class="row mT5 text-center">
                <div class="col-md-3">
a
                </div>
                <div class="col-md-3">
b
                </div>
                <div class="col-md-3">
c
                </div>
                                <div class="col-md-3">
                c
                                </div>
              </div>

            </div>

        </div><!-- ./row -->
    </div><!-- ./ container -->





        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="assets/js/jquery.min.js"><\/script>')</script>
        <script src="assets/js/nouislider.min.js"></script>
        <script src="assets/js/wNumb.js"></script>
        <script src="assets/js/calculator.js"></script>

    </body>
</html>