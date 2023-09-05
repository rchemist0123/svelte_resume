<script>
  let projects = [
    {
      title: "Project 1",
      description: "This is a description of project 1."
    },
    {
      title: "Project 2",
      description: "This is a description of project 2."
    }
    // ... Add more projects as needed
  ];
</script>

<h1>My Projects</h1>

<ul>
  {#each projects as project}
    <li>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </li>
    
  {/each}
</ul>