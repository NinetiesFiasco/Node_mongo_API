const page = `
<!doctype html>
<head>
  <title>Заполняем MongoTable</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="javascript.js"></script>
  <link rel="stylesheet" href="style.css"/>
</head>

<body>

  <div id="showBlock">

  </div>

  <input type="button" value="Найти" id="getAll"></input>


  <div id="addingBlock">
    <table>
      <thead>
        <tr>
          <th colspan="2">Добавить новый</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Новый</td>
          <td><input type="text" id="new" name="new" /></td>
        </tr>
        <tr>
          <td>Новый 2</td>
          <td><input type="text" id="new2" name="new2" /></td>
        </tr>
        <tr>
          <td>Новый 3</td>
          <td><input type="text" id="new3" name="new3" /></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2"><input type="button" value="Добавить" id="bAdd"/></td>
        </tr>
      </tfoot>
    </table>
  </div>

  <div id="redactOne">
    <table>
      <thead>
        <tr>
          <th colspan="2">Редактировать</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ID</td>
          <td><input type="text" id="redactID" /></td>
        </tr>
        <tr>
          <td>Новый</td>
          <td><input type="text" id="redact" /></td>
        </tr>
        <tr>
          <td>Новый 2</td>
          <td><input type="text" id="redact2" /></td>
        </tr>
        <tr>
          <td>Новый 3</td>
          <td><input type="text" id="redact3" /></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2"><input type="button" value="Сохранить" id="bRedact"/></td>
        </tr>
      </tfoot>
    </table>
  </div>



</body>`;

module.exports = page;