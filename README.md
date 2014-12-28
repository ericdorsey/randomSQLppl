
Wanted a way to generate random-ish person data for playing with SQL. 

AJAX call to the [https://randomuser.me/](https://randomuser.me/) API to help generate SQL INSERT statements with said random-ish data, along with fake professions from:  [http://www.mithrilandmages.com/utilities/Occupation.php](http://www.mithrilandmages.com/utilities/Occupation.php) 

and fake hobbies from:  
[http://www.springhole.net/writing_roleplaying_randomators/interests.htm](http://www.springhole.net/writing_roleplaying_randomators/interests.htm)

Example output:

```
INSERT INTO my_contacts
(last_name, first_name, email, gender, birthday, profession, location, status, interests, seeking)
VALUES
('Ray', 'Stella', 'stella.ray20@example.com', 'F', '12/4/1976', 'Food Safety Scientist', 'Akron, Minnesota', 'Friends', 'dogs,history documentaries', 'Relationship');
```

