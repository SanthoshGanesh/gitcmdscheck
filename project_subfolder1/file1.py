def cube_number(number):
  return number**3
print(cube_number(4))

def square(n):
  return n**2
print(square(6))

def squareforodd(x):
  if(x%2!=0):
    print(f"{x} is odd so squaring")
    return x**2
  else:
    print("exiting as x is not odd")

def perimetercirle(x):
  return 2*3.14*x

print("square and cubes are printed")

def areacircle(r):
  return 3.14*(r**2)

def evenno(x):
  if x%2==0:
     print(f"{x} is  even")
  else:
    print(f"{x} is not even")

def squareforeven(x):
  if(x%2==0):
    print(f"{x} is even so squaring")
    return x**2
  else:
    print("exiting as x is not even")
evenno(4)
print(squareforeven(6))
print(areacircle(4))

print(squareforodd(7))
print(perimetercirle(4))