import requests


# querystring = {"ingredients":"apples,flour,sugar","number":"5","ignorePantry":"true","ranking":"1"}

def byIngredients(userItem, cuisine):

    url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex"

    ingredients = userItem['fridge']
    intolerances = userItem['restrictions']

    querystring = {
        "limitLicense": "True",
        "offset":"0",  # number of results to skip (0, 900)
        "number":"10", # number of results to return (1, 100)
        "ranking":"2", # (0) minimize missing ingredients (0), (1)maximize used ingredients first, or (2) rank recipes by relevance
        # "excludeIngredients": "coconut, mango",
        "intolerances": intolerances, #"peanut, shellfish"
        # "diet": diet,
        "includeIngredients": ingredients, #"onions, lettuce, tomato"
        # "type": ,#"main course"
        # "query": ,#"burger"
        "cuisine": cuisine #"american"
    }


    headers = {
    'x-rapidapi-host': "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    'x-rapidapi-key': "85fe4b0aa1msh378a060a5f544fbp15e8edjsnc3884c1c12c4"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)
    
    return response['results']
    




