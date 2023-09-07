<script>
  import { Input, Label, Helper, Button, P, Textarea } from 'flowbite-svelte'
</script>

<form action="">
  <div class="sec-out">
    <div class="sec-in">
      <Label for="email" class="mb-2">이메일 주소</Label>
      <Input type="email" id="email" name="email" placeholder = "이메일 주소" required/>
    </div>
    <div class="sec-in">
      <Label for="message" class="mb-2">메시지</Label>
      <Textarea placeholder="메시지를 입력해주세요" rows=5 name="message" />
      <Button type="submit">보내기</Button>
    </div>

  </div>
</form>
<style>
  .sec-out {
    display: flex;
    justify-content: center;
    align-items: center; /* 수직 정렬 */
    flex-direction: column; /* default: row */
  }
  .sec-in  {
    margin-bottom: 1.5rem;
    width: 80%
  }
</style>
