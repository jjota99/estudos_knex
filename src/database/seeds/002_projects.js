exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          user_id: 10,
          title: "Meu primeiro projeto",
        },
        {
          user_id: 11,
          title: "Projetos inciados",
        },
      ]);
    });
};
