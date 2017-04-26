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
        <link rel="stylesheet" href="assets/css/font-awesome.min.css">
        <link rel="stylesheet" href="assets/css/styles.css">
        <link href="https://fonts.googleapis.com/css?family=Lato:400,300,700" rel="stylesheet">

        <!-- <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> -->


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
          </ul>
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

    <div class="container mT25">
        <div class="row">

            <div class="col-md-8 col-md-offset-2 greenBg calc_wrapper">
              <div class="row">
                <div class="col-md-12 mT5 text-center">
                  User the slider or manually insert the number of employees in your organization
                  <span class="small blocked pT5">(or in your business unit, department, or division, if this tool will be used on a smaller scale)</span>
                  <hr class="divider">
                </div>
              </div>

              <div class="row liteGreenBg mLR0 pL5">
                <div class="col-md-9 mT50 text-center">
                    <div id="employees"></div>
                </div>


                <div class="col-md-3 mTB15 text-center">
                    <!-- <form class="" method="post"> -->
                    <div class="form-group">
                        <label for="employees_num">Number of Employees</label>
                        <input class="form-control input-lg" id="employees_num" type="number" value="10">
                    </div>
                    <!-- </form> -->
                </div>
              </div>

              <div class="real_time_calc">

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
                    Monthly Payment * <span class="span_small">(no taxes applied)</span>
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

              </div><!-- ./real_time_calc -->


              <div class="row mT15 text-center mLR0">
                <hr class="divider">

                <div class="col-md-6 bR">

                  <!-- <div class="tax_header liteGreenBg pTB10 mTB10">
                   Tax
                  </div> -->

                  <div class="row mLR15">
                    <div class="col-md-12 tax_header liteGreenBg pTB10 mTB10">Select your country</div>


                        <!-- <div class="col-xs-6">
                            <img class="tax_flags" id="can_tax" src="assets/img/canada.png" alt="Canada">
                        </div>
                        <div class="col-xs-6">
                            <img  class="tax_flags" id="usa_tax" src="assets/img/usa.png" alt="USA">
                        </div> -->

                        <div>

                          <!-- Nav tabs -->
                          <ul id="myTabs" class="nav nav-tabs nav-justified" role="tablist">
                            <li role="presentation" class="active"><a id="tax_can" href="#canada_tax" aria-controls="canada_tax" role="tab" data-toggle="tab">CANADA</a></li>
                            <li role="presentation" class=""><a id="tax_usa" href="#usa_tax" aria-controls="usa_tax" role="tab" data-toggle="tab">USA</a></li>
                          </ul>

                          <!-- Tab panes -->
                          <div class="tab-content">
                              <div role="tabpanel" class="tab-pane active mT10 pT10" id="canada_tax">

                                <label class="col-xs-12" for="province"><img src="assets/img/can40.png" alt="Canada"> Select Province</label>
                                <div class="col-xs-12">
                                  <select class="form-control selected_value" id="province">
                                    <option disabled selected value>Select Province</option>
                                  </select>
                                </div>

                              </div>

                              <div role="tabpanel" class="tab-pane fade mT10 pT10" id="usa_tax">
                                  <label class="col-xs-12" for="us_states"><img src="assets/img/us40.png" alt="USA"> Select State</label>
                                  <div class="col-xs-12">
                                    <select class="form-control selected_value" id="us_states">
                                      <option disabled selected value>Select US State</option>
                                      <option value="AL">Alabama</option>
                                      <option value="AK">Alaska</option>
                                      <option value="AZ">Arizona</option>
                                      <option value="AR">Arkansas</option>
                                      <option value="CA">California</option>
                                      <option value="CO">Colorado</option>
                                      <option value="CT">Connecticut</option>
                                      <option value="DE">Delaware</option>
                                      <option value="DC">District Of Columbia</option>
                                      <option value="FL">Florida</option>
                                      <option value="GA">Georgia</option>
                                      <option value="HI">Hawaii</option>
                                      <option value="ID">Idaho</option>
                                      <option value="IL">Illinois</option>
                                      <option value="IN">Indiana</option>
                                      <option value="IA">Iowa</option>
                                      <option value="KS">Kansas</option>
                                      <option value="KY">Kentucky</option>
                                      <option value="LA">Louisiana</option>
                                      <option value="ME">Maine</option>
                                      <option value="MD">Maryland</option>
                                      <option value="MA">Massachusetts</option>
                                      <option value="MI">Michigan</option>
                                      <option value="MN">Minnesota</option>
                                      <option value="MS">Mississippi</option>
                                      <option value="MO">Missouri</option>
                                      <option value="MT">Montana</option>
                                      <option value="NE">Nebraska</option>
                                      <option value="NV">Nevada</option>
                                      <option value="NH">New Hampshire</option>
                                      <option value="NJ">New Jersey</option>
                                      <option value="NM">New Mexico</option>
                                      <option value="NY">New York</option>
                                      <option value="NC">North Carolina</option>
                                      <option value="ND">North Dakota</option>
                                      <option value="OH">Ohio</option>
                                      <option value="OK">Oklahoma</option>
                                      <option value="OR">Oregon</option>
                                      <option value="PA">Pennsylvania</option>
                                      <option value="RI">Rhode Island</option>
                                      <option value="SC">South Carolina</option>
                                      <option value="SD">South Dakota</option>
                                      <option value="TN">Tennessee</option>
                                      <option value="TX">Texas</option>
                                      <option value="UT">Utah</option>
                                      <option value="VT">Vermont</option>
                                      <option value="VA">Virginia</option>
                                      <option value="WA">Washington</option>
                                      <option value="WV">West Virginia</option>
                                      <option value="WI">Wisconsin</option>
                                      <option value="WY">Wyoming</option>
                                    </select>
                                  </div>

                              </div>
                            <!-- </form> -->
                          </div>

                        </div>

                  </div>

                 <!--  <div class="row">

                   <label for="province">Province</label>
                   <select class="form-control" id="province">
                     <option disabled selected value>Select Province</option>

                   </select>
                 </div> -->
                </div>


                <div class="col-md-6">
                  <div class="row mTB10 ">
                    <div class="col-xs-6 text-left mT15">
                      Total Monthly Payment *
                    </div>
                    <div class="col-xs-6 liteGreenBg pLR0">
                      <div class="pTB15">
                        <span class="current_flag"></span>
                        <div class="inlined" id="total_monthly"></div>
                      </div>
                      <button disabled type="button" id="order_monthly" class="btn btn-blue btn-block"> <i class="fa fa-shopping-cart"></i> Order</button>
                    </div>

                  </div>

                  <div class="row mTB10 pT15 ">
                    <div class="col-xs-6 text-left mT15">
                      Discounted Annual Pre-Payment **
                    </div>
                    <div class="col-xs-6 liteBlueBg pLR0">
                      <div class="pT15">
                        <span class="current_flag"></span>
                        <div class="inlined" id="total_annual"></div>
                        <span class="blocked small pTB5 mT10" id="saved"></span>
                      </div>
                      <button disabled type="button"  id="order_annual" class="btn btn-warning btn-block"> <i class="fa fa-shopping-cart"></i> Order</button>
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

        <!-- modal 1 -->
        <!-- line modal -->
        <div class="modal fade" id="monthly_modal" tabindex="-1" role="dialog" aria-labelledby="monthly_modal" aria-hidden="true">
          <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
              <h3 class="modal-title" id="lineModalLabel">Your Billing Details</h3>
            </div>
            <div class="modal-body">
              <div class="row">
              <div class="col-xs-12">
                  <form action="#" method="POST" id="payment_proceed">
                    <div class="row">
                      <div class="col-xs-6 col-sm-6 col-md-6">
                        <div class="form-group">
                          <input type="text" name="first_name" id="first_name" class="form-control input-sm" placeholder="First Name" required>
                        </div>
                      </div>
                      <div class="col-xs-6 col-sm-6 col-md-6">
                        <div class="form-group">
                          <input type="text" name="last_name" id="last_name" class="form-control input-sm" placeholder="Last Name" required>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xs-6 col-sm-6 col-md-6">
                        <div class="form-group">
                          <input type="text" name="company" id="company" class="form-control input-sm" placeholder="Company" required>
                        </div>
                      </div>
                      <div class="col-xs-6 col-sm-6 col-md-6">
                        <div class="form-group">
                          <input type="email" name="email" id="email" class="form-control input-sm" placeholder="Email Address" required>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <input type="text" name="address_1" id="address_1" class="form-control input-sm" placeholder="Address" required>
                    </div>

                    <div class="row">
                      <div class="col-xs-6 col-sm-6 col-md-6">
                        <div class="form-group">
                          <input type="text" name="city" id="city" class="form-control input-sm" placeholder="City" required>
                        </div>
                      </div>
                      <div class="col-xs-6 col-sm-6 col-md-6">
                        <div class="form-group">
                          <input type="text" name="state" id="state" class="form-control input-sm" placeholder="Province/State" required>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xs-6 col-sm-6 col-md-6">
                        <div class="form-group">
                          <input type="text" name="country" id="country" class="form-control input-sm" placeholder="Country" value="Canada" required>
                        </div>
                      </div>
                      <div class="col-xs-6 col-sm-6 col-md-6">
                        <div class="form-group">
                          <input type="tel" name="phone" id="phone" class="form-control input-sm" placeholder="Phone">
                        </div>
                      </div>
                    </div>
                    <input type="hidden" name="key" value="k95951617">
                    <div class="form-group">
                      <textarea class="form-control" rows="3" id="customer_note" name="customer_note" placeholder="Notes"></textarea>
                    </div>


                  </form>
              </div>
              </div>

            </div>
            <div class="modal-footer">
              <div class="btn-group btn-group-justified" role="group" aria-label="group button">
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                <div class="btn-group btn-delete hidden" role="group">
                  <button type="button" id="return_to_calculator" class="btn btn-default" data-dismiss="modal">Return</button>
                </div>
                <div class="btn-group" role="group">
                  <button type="submit" id="continue" class="btn btn-primary" value="Submit">Proceed to payment</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>





        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="assets/js/jquery.min.js"><\/script>')</script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/nouislider.min.js"></script>
        <script src="assets/js/wNumb.js"></script>
        <script src="assets/js/calculator_3.js"></script>

    </body>
</html>