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
        <!-- <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> -->
        <link rel="stylesheet" href="assets/css/nouislider.min.css">
        <link rel="stylesheet" href="assets/css/styles.css">
        <link href="https://fonts.googleapis.com/css?family=Lato:400,300,700" rel="stylesheet">

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


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
                    <!-- <form class="" method="post"> -->
                    <div class="form-group">
                        <label for="employees_num">Number of Employees</label>
                        <input class="form-control input-lg" id="employees_num" type="number" value="10">
                    </div>
                    <!-- </form> -->
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 mT25 text-center font16">
                  <p class="lead">Fees for <span class="emp_num"></span> employees</p>
                </div>
              </div>

              <div class="row mT15 text-center mLR0 liteBlueBg table_header">
                <div class="col-xs-4">
                  Number of Employees <span class="span_small">(from - to)</span>
                </div>
                <div class="col-xs-4">
                  Monthly Fee Per Employee
                </div>
                <div class="col-xs-4">
                  Monthly Payment * <span class="span_small">(no tax applied)</span>
                </div>

              </div>

              <div class="row mT15 text-center mLR0 table_row">
                <div class="col-xs-4">
                  10 - 19
                </div>
                <div class="col-xs-4">
                  $4.<sup>99</sup>
                </div>
                <div class="col-xs-4">
                  <div id="e_10_19" class="monthly_prices"></div>
                </div>

              </div>

              <div class="row mT15 text-center mLR0 table_row">
                <div class="col-xs-4">
                  20 - 49
                </div>
                <div class="col-xs-4">
                  $4.<sup>60</sup>
                </div>
                <div class="col-xs-4">
                  <div id="e_20_49" class="monthly_prices"></div>
                </div>
              </div>

              <div class="row mT15 text-center mLR0 table_row">
                <div class="col-xs-4">
                  50 - 99
                </div>
                <div class="col-xs-4">
                  $4.<sup>20</sup>
                </div>
                <div class="col-xs-4">
                  <div id="e_50_99" class="monthly_prices"></div>
                </div>
              </div>

              <div class="row mT15 text-center mLR0 table_row">
                <div class="col-xs-4">
                  100 - 250
                </div>
                <div class="col-xs-4">
                  $3.<sup>80</sup>
                </div>
                <div class="col-xs-4">
                  <div id="e_100_250" class="monthly_prices"></div>
                </div>

              </div>


              <div class="row mT15 text-center mLR0">
                <hr class="divider">
                <div class="col-md-6">
                  <div class="tax_header liteGreenBg pTB10 mTB10">
                   Tax
                  </div>
                  <label for="province">Province</label>
                  <select class="form-control" id="province">
                    <option disabled selected value>Select Province</option>

                  </select>
                </div>
                <div class="col-md-6 bL">
                  <div class="row mTB10 ">
                    <div class="col-xs-5 text-left">
                      Total Monthly Payment *
                    </div>
                    <div class="col-xs-7 liteGreenBg">
                      <div class="pTB15" id="total_monthly"></div> <i class="material-icons">add_shopping_cart</i>
                    </div>
                  </div>

                  <div class="row mTB10 pT15 ">
                    <div class="col-xs-5 text-left">
                      Discounted Annual Pre-Payment **
                    </div>
                    <div class="col-xs-7 liteBlueBg">
                      <div class="pTB15" id="total_annual"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div><!-- ./ calc_wrapper -->

            <div class="col-md-8 col-md-offset-2 shadow mT10">
              <p>For companies with >250 employees, contact TalentClick for pricing (1-877-723-3778 or sales@talentclick.com)</p>
              <p>The # employees will be reviewed yearly and pricing may be adjusted.</p>
              <p><b>*</b> Monthly payments must be via credit card with automatic pre-approval. 12 consecutive monthly payments will be charged.</p>
              <p><b>**</b> Full annual amount must be paid in advance using credit card, and will qualify for an additional 15% discount.</p>
            </div>

        </div><!-- ./row -->
    </div><!-- ./ container -->

    <footer class="footer">
        <div class="container">

            <div class="row fixed_seq">
                <div class="col-md-6">
                © <span id="current_year"></span> TalentClick Workforce Solutions Inc
                </div>
                <div class="col-md-6 text-right">
                  Call us at 1.877.723.3778 or email info@talentclick.com
                </div>
            </div>
        </div><!-- ./ container -->
        </footer>





        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="assets/js/jquery.min.js"><\/script>')</script>
        <script src="assets/js/nouislider.min.js"></script>
        <script src="assets/js/wNumb.js"></script>
        <script src="assets/js/calculator.js"></script>

    </body>
</html>