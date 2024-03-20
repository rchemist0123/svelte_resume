<script>
  let lists = [
    {dates:'2023-10-25', subject: 'Sepsis associated AKI'},
    {dates:'2022-10-21', subject: 'New-onset Atrial fibrillation'},
  ]
</script>
<div>
  <div>
    <ul>
      {#each lists as list}
      <li>
        subject:{list.subject}
      </li>
      <li>
        dates: {list.dates}
      </li>
      {/each}
    </ul>
  </div>
</div>