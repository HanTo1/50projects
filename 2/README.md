# Mini project: Expanding Cards

## Date: 5 - 1 - 2021

### Da hoc duoc:


- todo:

- tao 1 bien currentActive = 1;
- btn next:
  - khi bam btn next 
    - currentActive++;
    - neu currentActive > so luong circle thi currentActive = so luong circle
    - goi function update()
  
- btn prev:
  - khi bam btn next 
    - currentActive--;
    - neu currentActive < 1
    - goi function update()
- function update
  - foreach qua tung circle, index
    - neu index < currentActive
      - them class active vao circle
    - nguoc lai

- goi tat ca class active
- style chieu dai cho progress
- neu currentActive = 1 : btn prev hoat dong
- currentActive = so luong circle : next hoat dong
- con lai prev, next ko hoat dong