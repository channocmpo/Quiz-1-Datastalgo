from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer


@api_view(['GET'])
def getRoutes(request):
	routes = [
		{'path': '/', 'name': 'getRoutes', 'methods': ['GET']},
		{'path': '/products/', 'name': 'getProducts', 'methods': ['GET']},
		{'path': '/products/<pk>/', 'name': 'getProduct', 'methods': ['GET']},
	]
	return Response(routes)


@api_view(['GET'])
def getProducts(request):
	products = Product.objects.all()
	serializer = ProductSerializer(products, many=True)
	return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
	try:
		product = Product.objects.get(id=pk)
		serializer = ProductSerializer(product)
		return Response(serializer.data)
	except Product.DoesNotExist:
		return Response({'detail': 'Not found'}, status=404)

# Create your views here.
