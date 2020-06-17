<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * @var Product
     */
    private $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    public function index() {

        $products = $this->product->all();

        return response()->json($products);
    }

    public function show($id) {

        $product = $this->product->find($id);

        return response('OK', 200)
            ->header('Content-Type', 'text/plain');
    }

    public function save(Request $request) {

        $data = $request->all();
        $product = $this->product->create($data);

        return response('OK', 200)
            ->header('Content-Type', 'text/plain');
    }

    public function update(Request $request, $id) {

        $data = $request->all();

        $product = $this->product->find($id);
        $product->update($data);

        return response('OK', 200)
            ->header('Content-Type', 'text/plain');
    }

    public function delete($id) {

        $product = $this->product->find($id);
        $product->delete();

        return response('OK', 200)
            ->header('Content-Type', 'text/plain');
    }
}
