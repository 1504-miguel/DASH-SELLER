<?php


use Illuminate\Support\Facades\Route;

// REACT ROUTE
use Inertia\Inertia;
use App\Http\Controllers\ReactController;

// react route test
Route::get('/', function () {
    return Inertia::render('Test',[
        'testProps' => 'prop-a' // passing route as propsRoute::get('', function () {
    ]);
});

// login get post
Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');
Route::post('/login/post', [ReactController::class, 'login']);


// register get post
Route::get('/register', function () {
    return Inertia::render('Auth/Register');
});
Route::post('/register/post', [ReactController::class, 'register']);


// dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
});

// seller page
Route::get('/sellerpage', function () {
    return Inertia::render('SellerPage');
});

// seller products
Route::get('/sellerproduct', function () {
    return Inertia::render('SellerProducts');
});

// seller orders
Route::get('/sellerorder', function () {
    return Inertia::render('SellerOrders');
});
// seller register
Route::get('/sellerlogin', function () {
    return Inertia::render('SellerRegister');
});