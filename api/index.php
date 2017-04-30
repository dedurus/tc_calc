<?php
require __DIR__ . '/vendor/autoload.php';

use Automattic\WooCommerce\Client;
use Automattic\WooCommerce\HttpClient\HttpClientException;




// -------------- TALENTCLICK READ WRITE ----------------- //
$woocommerce = new Client(
    'https://talentclick.com',
    'ck_3855bce332f6fad0bc2ade3ea982e062cf1e886a',
    'cs_35e269bf42dbf2ef1ee0a4f2ea342dce6f59d929',
    [
        'wp_api' => true,
        'version' => 'wc/v1',
        'query_string_auth' => true
    ]
);
// -------------- TALENTCLICK ----------------- //



//$products = $woocommerce->get('products');
echo '<pre>';
//print_r($woocommerce);
//print_r($products);
echo '</pre>';
/*try{
    // Array of response results.
        $results = $woocommerce->get('customers');
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
}catch (HttpClientException $e) {
     $e->getMessage();
     $e->getRequest(); // Last request data.
     $e->getResponse(); // Last response data.
}*/
/*foreach ($products as $key => $value) {

    echo $value['id'] .'<br>';
    echo $value['permalink'] .'<br>';
    echo $value['name'] .'<br>';
    echo $value['price'] .'<br>';
    echo '---<br>';
    echo '<br>';

}*/


/*$data = [
    'payment_method' => 'payfirma',
    'payment_method_title' => 'PayFirma',
    'set_paid' => false,
    'billing' => [
        'first_name' => 'Dejan',
        'last_name' => 'Doe',
        'address_1' => '969 Market',
        'address_2' => '',
        'city' => 'San Francisco',
        'state' => 'CA',
        'postcode' => '94103',
        'country' => 'US',
        'email' => 'john.doe@example.com',
        'phone' => '(555) 555-5555'
    ],
    'shipping' => [
        'first_name' => 'John',
        'last_name' => 'Doe',
        'address_1' => '969 Market',
        'address_2' => '',
        'city' => 'San Francisco',
        'state' => 'CA',
        'postcode' => '94103',
        'country' => 'US'
    ],
    'line_items' => [
        [
            'product_id' => 109,
            'quantity' => 1,
            'price' => '599.00',
            'subtotal' => '599.00',
            'total' => '599.00',
        ],
        [
           'product_id' => 22,
           'variation_id' => 23,
           'quantity' => 1
       ]
    ],
    'shipping_lines' => []
];

$data_2 = [
    'currency' => 'USD',
    'payment_method' => 'paypal',
    'payment_method_title' => 'PayPal',
    'set_paid' => false,
    'billing' => [
        'first_name' => 'Petre',
        'last_name' => 'Petreski',
        'address_1' => '969 Market',
        'address_2' => '',
        'city' => 'San Francisco',
        'state' => 'CA',
        'postcode' => '94103',
        'country' => 'US',
        'email' => 'john.doe@example.com',
        'phone' => '(555) 555-5555'
    ],
    'shipping' => [
        'first_name' => 'Jonce',
        'last_name' => 'hahaha',
        'address_1' => '969 Market',
        'address_2' => '',
        'city' => 'San Francisco',
        'state' => 'CA',
        'postcode' => '94103',
        'country' => 'US'
    ],
    'line_items' => [
        [
            'product_id' => 125,
            'variation_id' => 129,
            'quantity' => 1,
            'price' => '599.00',
            'subtotal' => '599.00',
            'total' => '599.00',
        ]
    ],
    'shipping_lines' => [
    ]
];

$data_3 = [
    'currency' => 'USD',
    'payment_method' => 'payfirma',
    'payment_method_title' => 'PayFirma',
    'set_paid' => false,
    'billing' => [
        'first_name' => 'BLBALBLBL',
        'last_name' => 'NO PRICE',
        'address_1' => '969 Market',
        'address_2' => '',
        'city' => 'New York',
        'state' => 'New York',
        'postcode' => '94103',
        'country' => 'US',
        'email' => 'john.doe@example.com',
        'phone' => '(555) 555-5555'
    ],
    'line_items' => [
        [
            'product_id' => 140,
            'quantity' => 1,
            'price' => '1000.00',
            'subtotal' => '1000.00',
            'total' => '1000.00',
        ],
    ],
    'shipping_lines' => [
    ]
];*/


// make an order with dat aabove
echo '<pre>';
//print_r($woocommerce->post('orders', $data_3));
echo '</pre>';


//list orders
$list_orders = $woocommerce->get('orders');

// categoreis
//$categories = $woocommerce->get('products/categories');

// variations
//$variations = $woocommerce->get('products/attributes/5/terms');
//$variations = $woocommerce->get(' /wp-json/wc/v1/products/attributes/128');
echo '<pre>';
//print_r($variations);
print_r($list_orders);
//print_r($categories);

echo '</pre>';