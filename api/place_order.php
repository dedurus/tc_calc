<?php
$key = $_POST['key'];
if($key!="k95951617"){header("Location: http://talentclick.com/calculator");exit();}

require __DIR__ . '/vendor/autoload.php';

use Automattic\WooCommerce\Client;
use Automattic\WooCommerce\HttpClient\HttpClientException;


// -------------- LOCAL READ WRITE ----------------- //
$woocommerce = new Client(
    'http://localhost/woocommerce',
    'ck_307582007878e26ae41d726d105822f667cf110a',
    'cs_2df5cf9e2b1f242fb53ea695d90838035b41d11c',
    [
        'wp_api' => true,
        'version' => 'wc/v1',
        'query_string_auth' => true
    ]
);
// -------------- LOCAL ----------------- //

// -------------- TALENTCLICK READ WRITE ----------------- //
/*$woocommerce = new Client(
    'https://talentclick.com',
    'ck_3855bce332f6fad0bc2ade3ea982e062cf1e886a',
    'cs_35e269bf42dbf2ef1ee0a4f2ea342dce6f59d929',
    [
        'wp_api' => true,
        'version' => 'wc/v1',
        'query_string_auth' => true
    ]
);*/
// -------------- TALENTCLICK ----------------- //

// check everything if empty
// TODO: server validation !!!!!!
if(!empty($_POST['subscription_type']) ){

        // check subscription type
        if($_POST['subscription_type'] == 'monthly'){
        $monthly = [
            'currency' => $_POST['currency'],
            'payment_method' => 'Payfirma_Gateway',
            'payment_method_title' => 'Credit Card',
            'set_paid' => false,
            'billing' => [
                'first_name' => $_POST['first_name'],
                'last_name' => $_POST['last_name'],
                'address_1' => $_POST['address_1'],
                'address_2' => '',
                'city' => $_POST['city'],
                'state' => $_POST['state'],
                'company' => $_POST['company'],
                'postcode' => $_POST['postcode'],

                'country' => $_POST['country'],
                'email' => $_POST['email'],
                'phone' => $_POST['phone'],
                'customer_note' => $_POST['total_employees'],
                'customer_ip_address' => $_SERVER['REMOTE_ADDR'],
                'customer_user_agent' => $_SERVER['HTTP_USER_AGENT']
            ],
            'line_items' => [
                [
                    'product_id' => 140, // 9682 is hardcoded ID of `Calculator Monthly` product
                    'quantity' => $_POST['total_employees'],
                    'price' => $_POST['total'],
                    'subtotal' => $_POST['total'],
                    'total' => $_POST['total'],
                ],
            ],
            'shipping_lines' => [
            ]
        ];
        //print_r($monthly);
        $the_order = $woocommerce->post('orders', $monthly);
        $order_item = [
            'order_id' => $the_order['id'],
            'order_key' => $the_order['order_key']
        ];
        echo json_encode($order_item);


    }elseif($_POST['subscription_type'] == 'annual'){
       $annual = [
                   'currency' => $_POST['currency'],
                   'payment_method' => 'Payfirma_Gateway',
                   'payment_method_title' => 'Credit Card',
                   'set_paid' => false,
                   'billing' => [
                       'first_name' => $_POST['first_name'],
                       'last_name' => $_POST['last_name'],
                       'address_1' => $_POST['address_1'],
                       'address_2' => '',
                       'city' => $_POST['city'],
                       'state' => $_POST['state'],
                       'company' => $_POST['company'],
                       'postcode' => $_POST['postcode'],

                       'country' => $_POST['country'],
                       'email' => $_POST['email'],
                       'phone' => $_POST['phone'],
                       'customer_note' => $_POST['total_employees'],
                       'customer_ip_address' => $_SERVER['REMOTE_ADDR'],
                       'customer_user_agent' => $_SERVER['HTTP_USER_AGENT']
                   ],
                   'line_items' => [
                       [
                           'product_id' => 140, // 9683 is hardcoded ID of `Calculator Annual` product
                           'quantity' => $_POST['total_employees'],
                           'price' => $_POST['total'],
                           'subtotal' => $_POST['total'],
                           'total' => $_POST['total'],
                       ],
                   ],
                   'shipping_lines' => [
                   ]
               ];
               //print_r($monthly);
               $the_order_annual = $woocommerce->post('orders', $annual);
               $order_item_annual = [
                   'order_id' => $the_order_annual['id'],
                   'order_key' => $the_order_annual['order_key']
               ];
               echo json_encode($order_item_annual);
    }else{
        echo json_encode([
            'error' => true
            ]);
    }

}else{ // Some required fields are empty
    echo json_encode([
            'error' => true
            ]);
}


$customer_data = [
                       'first_name' => $_POST['first_name'],
                       'last_name' => $_POST['last_name'],
                       'address_1' => $_POST['address_1'],
                       'address_2' => '',
                       'city' => $_POST['city'],
                       'state' => $_POST['state'],
                       'company' => $_POST['company'],
                       'postcode' => $_POST['postcode'],
                        'password' => base64_encode(strtotime('now')),
                       'country' => $_POST['country'],
                       'email' => $_POST['email'],
                       'phone' => $_POST['phone'],
                       'customer_note' => $_POST['total_employees'],
                       'customer_ip_address' => $_SERVER['REMOTE_ADDR'],
                       'customer_user_agent' => $_SERVER['HTTP_USER_AGENT'],

                       'billing' => [
                          'first_name' => $_POST['first_name'],
                          'last_name' => $_POST['last_name'],
                          'address_1' => $_POST['address_1'],
                          'address_2' => '',
                          'city' => $_POST['city'],
                          'state' => $_POST['state'],
                          'company' => $_POST['company'],
                          'postcode' => $_POST['postcode'],
                          'country' => $_POST['country'],
                          'email' => $_POST['email'],
                          'phone' => $_POST['phone']
                       ]
                   ];
//echo json_encode($woocommerce->post('customers', $customer_data));

                   //$woocommerce->get('customers/2') // get existing cutsomer
/*$customer_response= [];
try{
    // Array of response results.
        $results = $woocommerce->post('customers', $customer_data);
        // Example: ['customers' => [[ 'id' => 8, 'created_at' => '2015-05-06T17:43:51Z', 'email' => ...

        // Last request data.
        $lastRequest = $woocommerce->http->getRequest();
        $lastRequest->getUrl(); // Requested URL (string).
        $lastRequest->getMethod(); // Request method (string).
        $lastRequest->getParameters(); // Request parameters (array).
        $lastRequest->getHeaders(); // Request headers (array).
        $lastRequest->getBody(); // Request body (JSON).

        // Last response data.
        $lastResponse = $woocommerce->http->getResponse();
        $lastResponse->getCode(); // Response code (int).
        $lastResponse->getHeaders(); // Response headers (array).
        $lastResponse->getBody(); // Response body (JSON).
        $customer_response = $lastResponse->getBody();
}catch (HttpClientException $e) {
    if($e->getMessage()){
      //TODO: get exsiting user info
      echo $customer_response = $e->getMessage();
    }
}

echo json_encode($customer_response);
*/
/*$list_orders = $woocommerce->get('orders');
echo '<pre>';
print_r($list_orders);

echo '</pre>';*/

//print_r($_POST);