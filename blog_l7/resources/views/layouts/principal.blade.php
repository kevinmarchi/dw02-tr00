@extends('layouts.index')

@section('conteudo')
    <a href="{{route('fornecedores.index')}}" class="btn btn-lg btn-primary">Fornecedores</a>
    <a href="{{route('categorias.index')}}" class="btn btn-lg btn-secondary">Categorias</a>
@endsection
