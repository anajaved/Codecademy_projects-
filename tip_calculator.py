#15% tip calculator, based on 6.00% Maryland sales tax

meal = float(raw_input ('Enter the price of your meal:'))
tax = 0.06
tip = 0.15

meal = meal + (meal * tax)
total = meal + (meal * tip)
print("%.2f" % total)
