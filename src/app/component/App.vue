<template >
  <div >
    <nav class="navbar navbar-light bg-light">
      <a href="/" class="navbar-brand">MEVN STACK</a>
    </nav>


  <div class="container">
      <div class="row">
          <div class="col-md-5">
              <div class="card">
                  <div class="card-body">
                      <form @submit.prevent="addTask" >
                        <div class="form-group">
                          <input type="text" v-model="task.title" placeholder="Inserta una nueva tarea" class="form-control">

                        </div>
                        <div class="form-group">
                          <textarea class="form-control" rows="10" cols="30" v-model="task.descripcion" placeholder="Inserte una descripción"></textarea>
                        </div>
                        <button class="btn btn-primary btn-block" name="button">Enviar</button>
                      </form>
                  </div>
              </div>
          </div>
          <div class="col-md-7">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Tarea</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="task of tasks">
                    <td> {{task.title}}</td>
                    <td> {{task.descripcion}}</td>
                  </tr>
                </tbody>
              </table>
          </div>
      </div>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
    task: {
      title: '',
      descripcion: '',
    },
    tasks: []
  }
},
created() {
  this.getTasks();
},
methods: {

  addTask() {
    fetch('/api/task', {
      method: 'POST',
      body: JSON.stringify(this.task),
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    this.task.title = '';
    this.task.descripcion = '';
  },
  getTasks() {
    fetch('/api/task')
    .then(RES => res.json())
    .then(data => {
      this.tasks = data;
      console.log(this.tasks)
    });
  }

}
}

</script>
