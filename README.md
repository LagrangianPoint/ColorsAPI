
# Colors Project

The Colors Project is a project that for managing colors. It is breaken into two main parts: the Front-End Colors Administrator, and the Back-End Colors API.

## Demo Link
The demo for this project is located at ______________________

## Test accounts

**User Role**
username: my_user
password: 123

**Administrator Role**
username: my_admin
password: 456


## Colors API

### Requirements

For installing you'll need:

- Ubuntu 18.04
- Ruby 2.2 or higher

### Technologies used

#### Back-End
- Rails 6
- SQLite 3

#### Front-End
- Vue.js
- Boostrap 4
- jQuery UI

### Installation
Run the following commands in your terminal:
```bash
sudo apt-get install ruby bundler sqlite3 nodejs npm yarn
```

On the folder called **colors-api**, in order to install Gem dependencies, run:
```bash
bundle install
```

Generate the database locally with:
```bash
rake db:create
```

Start  the database migrations with:
```bash
rake db:migrate
```

Seed the  database with sample data with:
```bash
rake db:seed
```

### Starting

On the folder **colors-api** run the following:
```bash
rails server
```

### API Endpoints Examples

For reading the color index:
```bash
curl --location --request GET 'http://localhost:3000/colores.json' -u my_user:123 
curl --location --request GET 'http://localhost:3000/colores.xml' -u my_user:123 
```

This API fetches 9 colors at the time, so if you need to go to each of the pages you can use
```bash
curl --location --request GET 'http://localhost:3000/colores?page=3' -u my_user:123 
```

For reading the information of a single color,
```bash
curl --location --request GET 'http://localhost:3000/colores/14.json' -u my_user:123 
curl --location --request GET 'http://localhost:3000/colores/14.xml' -u my_user:123 
```

For creating a new color:
```bash
curl --location --request POST 'http://localhost:3000/colores' \
-u my_admin:456 \
--form 'color="#bbccff"' \
--form 'name="sample-pantone-3"' \
--form 'pantone="123-456-3"' \
--form 'year="3003"'
```


For updating a color:
```bash
curl --location --request PUT 'http://localhost:3000/colores/101' \
-u my_admin:456 \
--form 'color="#22ccff"' \
--form 'name="sample-pantone-2"' \
--form 'pantone="456-123"' \
--form 'year="4000"'
```

For deleting a color:
```bash
curl --location --request DELETE 'http://localhost:3000/colores/99' -u my_admin:456 
```


### Testing

On the folder **colors-api** run the following:
```bash
rake test
```

## Colors Administrator

### Starting

On the folder **colors-api** run the following:
```bash
rails server
```

### Usage

- Access the login page http://localhost:3000/
- Enter your user or administrator credentials.
- Use the User interface.




