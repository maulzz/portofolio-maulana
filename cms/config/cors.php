<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['GET', 'HEAD', 'OPTIONS'],

    'allowed_origins' => array_filter(explode(',', env('CORS_ALLOWED_ORIGINS', '*'))),

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 3600,

    'supports_credentials' => false,
];
