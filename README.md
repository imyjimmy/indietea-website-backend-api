## AWS
aws user:
claudiajs-manager

.aws/credentials:
```
[claudia_manager]
aws_access_key_id = \*\*\*\*\*\*
aws_secret_access_key = \*\*\*\*\*\*
```

~/.bash_profile:
```
AWS_PROFILE=claudia_manager
```

## DB
Create instance of DynamoDB:

`aws dynamodb create-table --table-name customer-orders --attribute-definitions AttributeName=orderId,AttributeType=S --key-schema AttributeName=orderId,KeyType=HASH --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 --region us-east-1 --query TableDescription.TableArn --output text`

Tables
DB Service | Table Name | Attribute Name | Attribute Type | Key Schema | Key Type
DynamoDB | customer-orders | orderId | String | orderId | Hash
etc

