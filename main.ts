class CSList<T>
{
    public Content: T[] = [];
    constructor()
    {

    }

    public Add(item: T)
    {
        if (!this.Content.includes(item))
            this.Content.push(item);
    }

    public Remove(item: T)
    {
        for (var i = 0; i < this.Count(); i++)
        {
            if (this.Content[i] == item)
            {
                this.Content.splice(i, 1);
                break;
            }
        }
    }

    public RemoveAt(index: number)
    {
        if (this.Count() > 0)
            this.Content.splice(index, 1);
    }

    public Count() : number
    {
        return this.Content.length;
    }
}


class CSDictionary<Key, Value>
{
    public Content: [Key[], Value[]] = [[], []];

    constructor()
    {

    }

    get Keys() : Key[]
    {
        let content:Key[] = [];

        for (var i = 0; i < this.Content[0].length; i++)
        {
            content.push(this.Content[0][i]);
        }
        return content;
    }
    
    get Values() : Value[]
    {
        let content:Value[] = [];

        for (var i = 0; i < this.Content[1].length; i++)
        {
            content.push(this.Content[1][i]);
        }
        return content;
    }


    public Add(Key: Key, Value: Value)
    {
        if (!this.Content[0].includes(Key))
        {
            this.Content[0].push(Key);
            this.Content[1].push(Value);
        }
    }

    public Remove(Key: Key)
    {
        for (var i = 0; i < this.Content[0].length; i++)
        {
            if (this.Content[0][i] == Key)
            {
                this.Content[0].splice(i, 1);
                this.Content[1].splice(i, 1);
                break;
            }
        }
    }

    public RemoveAt(index: number)
    {
        if (this.Count() > 0)
        {
            this.Content[0].splice(index, 1);
            this.Content[1].splice(index, 1);
        }
    }

    public Count() : number
    {
        return this.Content[0].length;
    }
}