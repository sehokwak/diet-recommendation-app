import json
import getRecipes


import boto3
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('ingredients')

# POST creates new entries in database
def post_handler(event, context):
    nickname = event['nickname']
    restrictions = event['restrictions']

    response = table.put_item(
        Item={
            "id":nickname,
            "restrictions":restrictions
        })

    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": f"hello {nickname}, your restrictions are {restrictions}"
            # "location": ip.text.replace("\n", "")
        }),
    }


# PUT updates existing entries in database
def put_handler(event, context):
    nickname = event['nickname']
    restrictions = event['restrictions']

    response = table.update_item(
        Key={
            "id":nickname,
        },
        UpdateExpression='set restrictions = :r',
        ExpressionAttributeValues={
            ':r': restrictions
        })

    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": f"hello {nickname}, your restrictions have been updated to {restrictions}"
            # "location": ip.text.replace("\n", "")
        }),
    }


# GET reads item in database
def get_handler(event, context):
    nickname = event['queryStringParameters']['nickname']
    cuisine = event['queryStringParameters']['cuisine']

    response = table.get_item(
        Key={
            "id":nickname
        })
    
    recipes = getRecipes.byIngredients(response['Item'], cuisine)

    # try:
    #     response = table.get_item(
    #         Key={
    #             "id":nickname,
    #         })
    # except ClientError as e:
    #     print(e.response['Error']['Message'])

    return {
        "statusCode": 200,
        "body": json.dumps(recipes[0]['title']
        # {
        #     "message": f"hello {nickname}, your restrictions stored in the database are {response['Item']}"
            
        # }
        )
    }


def get_recipes(event, context):
    id = event['nickname']

    restrictions = table.get_item(
        Key={
            'id':id
        })

    