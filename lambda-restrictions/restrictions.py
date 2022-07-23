import json
import boto3



dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('ingredients')

# POST creates new entries in database
def post_handler(event, context):
    nickname = event['nickname']
    age = event['age']
    gender = event['gender']
    diet = event['diet']
    restrictions = event['restrictions']

    response = table.put_item(
        Item={
            "id"           : nickname,
            "age"          : age,
            "gender"       : gender,
            "diet"         : diet,
            "restrictions" : restrictions
        })

    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": f"Successfully updated data for {nickname}"
        }),
    }


